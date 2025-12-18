import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const KanauWa5CLimted = ({ selectedItemId, handleBackClick }) => {
  return (
    <div
      id={selectedItemId}
      className={`modal ${selectedItemId ? "active" : ""}`}
    >
      <div className="container">
        <h1 className="short-line">【五色版】限定叶う輪</h1>
        <div className="product-introduction">
          <dl>
            <dt>【五色版】限定叶う輪</dt>
            <dd>
              手首や普段に使用するバッグ等好きな所につけてモチベーション、テンションを向上し、練習の成果を発揮し願いを「叶え」ていただくものです。
            </dd>
            <dd>
              <div className="price">初穂料：各800円</div>
            </dd>
          </dl>
          <div className="photo-frame mori_ya">
            <img src={Images.kanau_wa_5climted_sceen2} alt="" />
          </div>
          <div className="photo-frame mori_ya">
            <img src={Images.kanau_wa_5climted_sceen1} alt="" />
          </div>
          <div className="photo-frame mori_ya">
            <img src={Images.kanau_wa_5climted_green} alt="" />
          </div>
          <div className="photo-frame mori_ya">
            <img src={Images.kanau_wa_5climted_black} alt="" />
          </div>
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>
      {/* 250131 fix */}
      {/* <div className="container">
        <h1>叶う輪―バレー、ビーチバレー</h1>
        <div className="photo-frame kanau_wa_volley">
          <img src={Images.kanau_wa_volley} alt="" />
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div> */}
    </div>
  );
};

export default KanauWa5CLimted;