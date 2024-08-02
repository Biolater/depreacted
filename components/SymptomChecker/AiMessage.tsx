const AiMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="me-auto text-sm px-3 py-2 rounded-lg break-words whitespace-pre-line max-w-[75%] bg-secondary">
      <div>{message}</div>
    </div>
  );
};

export default AiMessage;
