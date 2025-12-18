import "../../styles/containers/ReadMoreLinks.sass";
import Images from "../../dataList/img";

const WarauWa = ({ selectedItemId, handleBackClick }) => {
  return (
    <div
      id={selectedItemId}
      className={`modal ${selectedItemId ? "active" : ""}`}
    >
      <div className="container">
        <h1 className="short-line">笑う輪</h1>
        <div className="product-introduction">
          <dl>
            <dt>御祭神&emsp;潜龍大神</dt>
            <dd>
              潜龍井に鎮まり坐す潜龍大神は、家系にまつわる諸々の悪縁を水に流し、「良縁」と成し、病気平癒、事業隆昌など寿福長命に霊験あらたかな神として篤く崇敬されています。
              <br />
              『笑い龍』は「笑いは、心の常備薬」を表現した石像としてご参拝の皆様とお会いになるのを心待ちにされております。
              <br />
              潜龍大神の御利益・笑いと共に笑う輪を頂いて心の常備薬として日々健やかにお過ごしください。
            </dd>
            <dd>
              <div className="price">初穂料：800円</div>
            </dd>
          </dl>
          <div className="photo-frame mori_ya warau-wa-port">
            <img src={Images.warau_wa_port} alt="" />
          </div>
          {/* <figure className="photo-frame mori_ya">
            <img src={Images.toukon_img03} alt="" />
          </figure> */}
          {/* 250131 fix         */}
          {/* <p>競技に使用するボールに特徴があるサッカー、野球、バレー、バスケ、テニス、バドミントン、卓球を選抜しました。また、その他の球技や武道、陸上競技や水泳といったボールを使用しない競技には“スポーツ全般”がございます。</p> */}
          {/* <h2 className="first-but-middle-paragraph text-align-center">“五色版叶う輪”</h2> */}
          {/* <div className="photo-frame mori_ya"> */}
          {/* <img src={Images.kanau_wa_all} alt="" /> */}
          {/* </div>           */}
        </div>
        <button onClick={handleBackClick}>戻る</button>
      </div>
    </div>
  );
};

export default WarauWa;