import Image from "next/image";
export default function Login() {
  return (
    <div className="flex h-screen items-start justify-center">
      <div>
        <a className="flex">
          {<Image src="/logo.svg" width={32} height={32} alt="logo" />}{" "}
        </a>{" "}
        <h1 className="text-white">hello</h1>
      </div>
    </div>
  );
}
