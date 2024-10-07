export function Header() {
  return (
    <header className="w-full flex justify-end items-center bg-white p-4 fixed">
      <div className="flex items-center space-x-4 border-2 border-red">
        <span className="text-white">yurazavadenko43@gmail.com</span>
        <div className="w-10 h-10 bg-gray-600 rounded-full overflow-hidden"></div>
      </div>
    </header>
  );
}
