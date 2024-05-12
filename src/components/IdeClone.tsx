import SampleSplitter from "./SampleSplitter";
import { useResizable } from "react-resizable-layout";
import { cn } from "../utils/cn";

const IdeClone = (): JSX.Element => {
  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    splitterProps: terminalDragBarProps,
  } = useResizable({
    axis: "y",
    initial: 450,
    min: 50,
    reverse: true,
  });
  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 500,
    min: 50,
  });
  useResizable({
    axis: "x",
    initial: 200,
    min: 50,
    reverse: true,
  });

  return (
    <div className="container">
      <div
        className={
          "flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"
        }
      >
        <div className={"flex grow"}>
          <div
            className={cn("shrink-0 contents", isFileDragging && "dragging")}
            style={{ width: fileW }}
          >
            Aside
          </div>
          <SampleSplitter isDragging={isFileDragging} {...fileDragBarProps} />
          <div className={"flex grow"}>
            <div className={"grow bg-darker contents"}>Body</div>
          </div>
        </div>
        <SampleSplitter
          dir={"horizontal"}
          isDragging={isTerminalDragging}
          {...terminalDragBarProps}
        />
        <div
          className={cn(
            "shrink-0 bg-darker contents",
            isTerminalDragging && "dragging"
          )}
          style={{ height: terminalH }}
        >
          Content
        </div>
      </div>
    </div>
  );
};

export default IdeClone;
