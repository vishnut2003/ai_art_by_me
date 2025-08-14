import { ConversationItem } from '@/types/ChatBotTypes'
import { RiBrushAiLine, RiLoaderLine, RiUser3Line } from '@remixicon/react'
import React from 'react'

const Conversation = ({
  conversation
}: {
  conversation: ConversationItem[],
}) => {
  return (
    <div
      className='h-full min-h-[500px] w-full py-[20px] overflow-auto'
    >
      <div
        className='w-full max-w-4xl mx-auto'
      >
        <div
          className='flex flex-col w-full gap-[20px] h-max'
        >
          {
            conversation.map((chat, index) => {

              if (chat.isPending) {
                return (
                  <div
                    className='self-start space-y-1'
                    key={index}
                  >
                    <p
                      className='text-xs animate-pulse'
                    >Processing...</p>
                    <div
                      className='w-[150px] h-[200px] flex items-center justify-center bg-dark-2 rounded-md'
                    >
                      <RiLoaderLine
                        size={20}
                        className='animate-spin'
                      />
                    </div>
                  </div>
                )
              }

              return (
                <div
                  key={index}
                  className={`space-y-3 ${chat.role === "user" ? "self-end" : "self-start"}`}
                >
                  <div
                    className='flex items-center gap-1'
                  >
                    <div
                      className='min-w-[30px] h-[30px] bg-white/10 flex items-center justify-center rounded-full'
                    >
                      {
                        chat.role === "user" ?
                          <RiUser3Line
                            size={15}
                          />
                          : <RiBrushAiLine
                            size={15}
                          />
                      }
                    </div>
                    <div>
                      <p>{chat.role === "user" ? "You" : "AI Assistant"}</p>
                    </div>
                  </div>
                  <div
                    className='py-3 px-4 bg-dark-2 rounded-[30px]'
                  >
                    <p
                      className='text-sm'
                    >{typeof chat.data === "string" ? chat.data : ""}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Conversation