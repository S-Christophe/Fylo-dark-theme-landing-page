export default function Error({ message }: { message: string }) {
  return (
    <div className="mb-3 pl-7 text-left text-[0.625rem] text-red-600">
      {message}
    </div>
  );
}
