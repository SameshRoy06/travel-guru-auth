import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";



const Home = () => {

    return (
        <div style={{backgroundImage: 'url("")'}} className="container mx-auto mt-24" >
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="">
              <LeftSide></LeftSide>
            </div>
            <div className="col-span-3">
                <RightSide></RightSide>
            </div>
          </div>
        </div>
    );
};

export default Home;
// 