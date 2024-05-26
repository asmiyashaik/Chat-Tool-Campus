
import { MultiChatSocket,MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (Props) => {
    const chatProps = useMultiChatLogic(
        '0777bb36-c998-4bac-8fe0-f5541efb75ec',
        Props.user.username,
        Props.user.secret
    );
    return (
        <div style={{height: '108vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps}  style={{height: '100%'}} />
        </div>
          
    )
}

export default ChatsPage;