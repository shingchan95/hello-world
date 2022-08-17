import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';

import { Chat, Channel, Window, ChannelHeader, MessageList, MessageInput, Thread, LoadingIndicator, ChannelList } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const apiKey = process.env.REACT_APP_STREAM_API_KEY;

const user = {
  id: 'dave',
  name: 'Dave',
  image: 'https://i.pravatar.cc/150?u=samjas'
}

export default function App() {

  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {

    const init = async () => {
      const chatClient = StreamChat.getInstance(apiKey);
      await chatClient.connectUser(user, chatClient.devToken(user.id));

      const channel = chatClient.channel('messaging', 'fl1-chat', {
        name: 'FL1 Chat',
        image: 'https://www.fl1digital.com/wp-content/themes/fl1-digital-2022/img/fl1-logo-icon.svg',
        members: ['dave', 'samjas'],
      });

      await channel.watch();

      setChannel(channel);
      setChatClient(chatClient);
    }

    init();
    if (chatClient) return () => chatClient.disconnect();
  }, []);

  if (!chatClient) return <LoadingIndicator />;

  return (
    <Chat client={chatClient} theme="messaging light">
      <ChannelList channel={channel} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}