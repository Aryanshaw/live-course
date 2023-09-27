import Footer from "@/components/Footer/Footer";
import Benfit from "./BenifitPage/page";
import Book from "./bookPage/page";
import BookSession from "./bookSession/page";
import Faculty from "./faculty/page";
import LiveCourse from "./liveCourse/page";
import LiveCoursePage2 from "./liveCoursePage2/page";
import Marketing from "./marketingpage/page";
import Schedule from "./schedule/page";
import ScholarShip from "./scholarShip/page";
import Syllabus from "./syllabus/page";

export default function Home() {
  return (
    <div>
      <LiveCourse />
      <LiveCoursePage2 />
      <Schedule />
      <Faculty />
      <Book />
      <Syllabus />
      <Benfit />
      <ScholarShip />
      <Marketing />
      <BookSession/>
      <Footer/>
    </div>
  );
}
