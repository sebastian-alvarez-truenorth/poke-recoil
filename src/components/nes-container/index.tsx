import { NESContainerProps } from './types';

const NESContainer = ({ title, children }: NESContainerProps) => (
    <div className="h-full nes-container with-title">
      <p className="title">{ title }</p>
      { children }
    </div>
);
export default NESContainer;