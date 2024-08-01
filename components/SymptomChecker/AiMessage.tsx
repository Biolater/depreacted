const AiMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="me-auto text-sm px-3 py-2 rounded-lg max-w-[75%] bg-secondary">
      {message}
    </div>
  );
};

export default AiMessage;
