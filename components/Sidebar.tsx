'use client'

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from '@/firebase'
import ChatRow from '@/components/ChatRow'
import ModelSelection from "./ModelSelection";

function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'),
      orderBy('createdAt', 'asc'))
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">

        {/* new chat */}
        <NewChat />
        <div className="hidden sm:inline">
          <ModelSelection />
        </div>

        <div className="flex flex-col space-y-2 my-2">
          {loading && (
            <div className="animate-pulse text-center text-white">
              <p>Loading Chats...</p>
            </div>
          )}

          {/* Map through chatRow */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>

      </div>

      {session && (
        <div className="flex flex-col justify-center items-center">
            <img
              src={session.user?.image!}
              alt="profile picture"
              className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2
          hover:opacity-50"
              onClick={() => signOut()}
            />
            <p className="text-white text-center font-semibold">{session.user?.name!}</p>
        </div>
      )}
    </div>
  )
}

export default Sidebar
