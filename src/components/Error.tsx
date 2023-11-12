export default function Error({ message }: { message: string }) {
  return <div className="mt-3 pl-7 text-left text-red-600">{message}</div>;
}
