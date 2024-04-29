import { Link } from "react-router-dom";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="shadow-lg">
      <div className="my-8 text-center max-w-4xl mx-auto space-y-4 p-4">
        <h2 className="text-2xl font-oswald">Recommended Destinations</h2>
        <p className="italic">
          RoamCraft`s Top Destinations: Unveiling the Ultimate Travel Hotspots.
          Discover Adventure, Culture, and Beauty Awaits in Every Corner. Start
          Exploring Now!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
        <Link>
          <div className="item relative">
            <img
              className="w-full h-[200px]"
              src="https://lh3.googleusercontent.com/p/AF1QipNZ6itWSjp6PynXlu9Lq6IKa10gA7Xp-vSJ3EMD=s1360-w1360-h1020-rw"
              alt=""
            />
            <div className="content text-white absolute bottom-3 left-3">
              <p className="text-lg font-semibold font-oswald">
                Petronas Twin Towers
              </p>
              <p className="font-medium">Malaysia</p>
            </div>
          </div>
        </Link>

        <Link>
          <div className="item relative">
            <img
              className="w-full h-[200px]"
              src="https://lh3.googleusercontent.com/p/AF1QipNXb0X2KWHCOzHGYINzkxTUOlPw9-tNnIcdg2dT=s1360-w1360-h1020-rw"
              alt=""
            />
            <div className="content text-white absolute bottom-3 left-3">
              <p className="text-lg font-semibold font-oswald">Angkor Wat</p>
              <p className="font-medium">Cambodia </p>
            </div>
          </div>
        </Link>

        <Link>
          <div className="item relative">
            <img
              className="w-full h-[200px]"
              src="https://media.istockphoto.com/id/1183878653/photo/asian-girl-walk-in-wat-phra-kaew-and-grand-palace-travel-in-bangkok-city.jpg?s=612x612&w=0&k=20&c=Lz0Usx7d0kXQW3KvB-pNu00gZjIhTcZ_fBQtN04K4T8="
              alt=""
            />
            <div className="content text-white absolute bottom-3 left-3">
              <p className="text-lg font-semibold font-oswald">Bangkok</p>
              <p className="font-medium">Thailand</p>
            </div>
          </div>
        </Link>

        <Link>
          <div className="item relative">
            <img
              className="w-full h-[200px]"
              src="https://lh3.googleusercontent.com/p/AF1QipNScqrwdnIoEdHZYKVM1hpmOpM0i3mlvRzxiI-A=s1360-w1360-h1020-rw"
              alt=""
            />
            <div className="content text-white absolute bottom-3 left-3">
              <p className="text-lg font-semibold font-oswald">
                Temple Of Literature
              </p>
              <p className="font-medium">Vietnam</p>
            </div>
          </div>
        </Link>

        <Link>
          <div className="item relative">
            <img
              className="w-full h-[200px]"
              src="https://lh3.googleusercontent.com/p/AF1QipOtn45cWWNc4uyT2hJiwTFZ7U5Qo6FI2o_jzWfS=s1360-w1360-h1020-rw"
              alt=""
            />
            <div className="content text-white absolute bottom-3 left-3">
              <p className="text-lg font-semibold font-oswald">
                Borobudur Temple
              </p>
              <p className="font-medium">Indonesia</p>
            </div>
          </div>
        </Link>

        <Link>
          <div className="item relative">
            <img
              className="w-full h-[200px]"
              src="https://lh3.googleusercontent.com/p/AF1QipMZbyoKI2IWjslRIiMypPwG3AXVYjYjl1ND2c75=s1360-w1360-h1020-rw"
              alt=""
            />
            <div className="content text-white absolute bottom-3 left-3">
              <p className="text-lg font-semibold font-oswald">Penang</p>
              <p className="font-medium">Malaysia</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Destination;
