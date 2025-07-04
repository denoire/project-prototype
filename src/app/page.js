import NavBar from '@/app/components/NavBar';
import IssueFinder from "@/app/issue-finder/page";
import ReadmeViewer from "@/app/readme-viewer/page";
import ProfileComparison from "@/app/profile-comparison/page";
import MarkdownGenerator from "@/app/markdown-generator/page";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-gray-50">
            <section className="max-w-xl text-left">
                <h1 className="text-5xl font-extrabold mb-8">GitGood</h1>
                <p className="text-lg text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </section>
        </main>
    );
}
