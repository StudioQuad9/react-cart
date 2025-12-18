import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const SyuinChou = ({ selectedItemId, handleBackClick }) => {
  return (
    <div
      id={selectedItemId}
      className={`modal ${selectedItemId ? "active" : ""}`}
    >
      <div className="container syuin-chou">
        <h1>冬季限定御朱印</h1>
        <div className="catch-on-modal">4年に1度のスポーツの祭典</div>
        <div className="photo-frame">
          <img src={Images.syuin_chou_limited_2026} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>
    </div>
  );
};
// syuin_chou_limited_2026
// syuin_chou_limited_front
// syuin_chou_limited_back

export default SyuinChou;