import UserList from "@/components/User/UserList";
import { getUserData } from "@/lib/get-users";

export default async function Home() {
  const data = await getUserData();

  if (data.error) {
    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-7xl text-center text-white font-extrabold my-10">All Users!</h1>
        <div className="text-center text-red-500 text-2xl">{data.error}</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-7xl text-center text-white font-extrabold my-10">All Users!</h1>
        <div className="text-center text-gray-500 text-2xl">No data found!</div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl lg:text-7xl text-center text-white font-extrabold my-10">All Users!</h1>
      <UserList data={data} />
    </div>
  );
}
