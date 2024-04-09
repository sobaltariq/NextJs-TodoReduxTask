import Photos from "@/components/home/Photos";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="outer-container">
        <div className="main-top-container">
          <h1>Home Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            vitae quibusdam ullam unde, voluptates et quo nobis. Illum dolor
            omnis hic laborum beatae dicta officia tempore, cupiditate voluptate
            et!
          </p>
        </div>
        <Photos />
      </div>
    </>
  );
}
