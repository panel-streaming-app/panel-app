export default function PageContainer({
  children: children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen m-0 flex h-screen w-lvw  flex-col items-start justify-start overflow-x-hidden py-5 pl-4 lg:pl-8">
      {children}
    </div>
  );
}
