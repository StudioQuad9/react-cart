import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const KanauWaGolf = ({ selectedItemId, handleBackClick }) => {
  return (
    <div
      id={selectedItemId}
      className={`modal ${selectedItemId ? "active" : ""}`}
    >
      <div className="container">
        <h1 className="short-line">叶う輪―ゴルフ</h1>
        <div className="product-introduction">
          <dl>
            <dt>叶う輪【根性育成】（青、緑、赤、黄）</dt>
            <dd>
              手首や普段に使用するバッグ等好きな所につけてモチベーション、テンションを向上し、練習の成果を発揮し願いを「叶え」ていただくものです。
            </dd>
            <dd>
              <div className="price">初穂料：各800円</div>
            </dd>
          </dl>
          <div className="photo-frame mori_ya">
            <img src={Images.toukon_img02} alt="" />
          </div>
          <figure className="photo-frame mori_ya">
            <figcaption>各種ボールスタイルとワイヤーカラー</figcaption>
            <img src={Images.toukon_img03} alt="" />
          </figure>
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

export default KanauWaGolf;