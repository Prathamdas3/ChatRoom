'use client';
import React, { useState, useEffect } from 'react';
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  onSnapshot,
  where,
  orderBy,
} from 'firebase/firestore';
import { auth, db } from '@/config/firebase';

type Message = {
  text: string;
  createdAt: any;
  user: string;
  room: string;
  id: string;
};

export default function Page({ code }: ChatProp) {
  const [newMessage, setNewMessage] = useState<string>('');
  const [message, setMessage] = useState<Array<Message>>([]);
  const messageRef = collection(db, 'messages');

  useEffect(() => {
    const queryMessages = query(
      messageRef,
      where('room', '==', code),
      orderBy('createdAt')
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages: Array<Message> = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id } as Message);
      });

      setMessage(messages);
    });

    return () => unsubscribe();
  }, [messageRef, code]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage === '') return;
    await addDoc(messageRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser?.displayName,
      room: code,
    });
    setNewMessage('');
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="text-center font-bold bg-ghost p-4 text-3xl order-1">
        <h1>Welcome to: {code}</h1>
      </div>
      <div className="order-2 h-[75vh] my-4 border border-gray-700 rounded-lg p-4">
        {message &&
          message.map((message: Message) => (
            <h1 key={message.id} className="text-lg text-gray-300">
              {message.user}
              <span className="text-sm text-white"> {message.text} </span>
            </h1>
          ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 justify-between order-3 "
      >
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-[90%]  "
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="btn btn-success w-[10%]">
          Send
        </button>
      </form>
    </div>
  );
}
