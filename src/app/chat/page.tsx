'use client';
import React, { useState, useRef } from 'react';
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

  return (
    <div>
      {room ? (
        <div className="container mx-auto ">
          <Chat code={room} />
        </div>
      ) : (
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2 gap-4">
          <button className="btn" onClick={() => setIsModalOpen(true)}>
            Join Chat
          </button>
          {isModalOpen && (
            <div id="my_modal_1" className="modal">
              <div className="modal-box flex flex-col gap-2">
                <h3 className="font-bold text-lg">Join chatroom</h3>
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

                <div className="modal-action">
                  <form method="dialog " className="flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-error"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success"
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
