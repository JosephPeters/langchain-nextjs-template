import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
      👩🏼‍🦰 Meet Ashlyn! 
      </h1>
      <ul>
        <li className="text-l">
          🧽
          <span className="ml-2">
            A Residential Cleaning Expert.
          </span>
        </li>
        <li className="hidden text-l md:block">
         🧼
          <span className="ml-2">
           He will only answer questions about the cleaning and business.
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="/api/chat/cleaning"
      emoji="👩🏼‍🦰"
      titleText="Ashyln - Residential Cleaning Expert"
      placeholder="Ask me anything about residential cleaning!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
