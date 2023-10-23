'use client';
import React, { useState, useEffect } from 'react';
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  onSnapshot,
  where,
} from 'firebase/firestore';
import { auth, db } from '@/config/firebase';
export default function Page({ code }: ChatProp) {
  const [newMessage, setNewMessage] = useState<string>('');
  const messageRef = collection(db, 'messages');

  useEffect(() => {
    const queryMessages = query(messageRef, where('room', '===', code));
    onSnapshot(queryMessages, (snapshot) => {
      console.log('new message');
    });
  }, [messageRef, code]);

  const handleSubmit = async (e: any) => {
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
    <div>
      <form onSubmit={handleSubmit} className="flex  gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="btn btn-success">
          Send
        </button>
      </form>
    </div>
  );
}
