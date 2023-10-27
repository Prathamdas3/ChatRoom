'use client';
import React, { useState, useRef, useEffect } from 'react';
import Chat from '@/components/Chat';
export default function Page() {
  const [room, setRoom] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const roomInputRef = useRef<HTMLInputElement>(null);

  const handleJoinRoom = () => {
    if (roomInputRef.current) {
      setRoom(roomInputRef.current.value);
    }
    setIsModalOpen(false);
  };
  const modalChange = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };
  console.log(isModalOpen);
  return (
    <div>
      {room ? (
        <div className="container mx-auto ">
          <Chat code={room} />
        </div>
      ) : (
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2 gap-4">
          {!isModalOpen && (
            <button className="btn" onClick={modalChange}>
              Join Chat
            </button>
          )}
          {isModalOpen && (
            <div className="">
              <div className=" flex flex-col gap-4">
                <h3 className="font-bold text-2xl">Join chatroom</h3>
                <label className="mx-2 text-sm" htmlFor="room_id">
                  Enter room code
                </label>
                <input
                  type="text"
                  placeholder="Type code "
                  id="room_id"
                  className="input input-bordered w-full max-w-xs"
                  ref={roomInputRef}
                />

                <div className="">
                  <form className="flex gap-2 ">
                    <button
                      type="submit"
                      className="btn btn-error w-[50%]"
                      onClick={modalChange}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success w-[50%]"
                      onClick={handleJoinRoom}
                    >
                      Join
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
