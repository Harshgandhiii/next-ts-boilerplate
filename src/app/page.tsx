import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<div>Hello from {process.env.NEXT_PUBLIC_ENV}</div>
			<Button>Demo Button</Button>
		</div>
	);
}
