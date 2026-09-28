export default function DemoPage() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#000",
        minHeight: "100vh",
      }}
    >
      <video
        autoPlay
        muted
        loop
        controls
        playsInline
        preload="metadata"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      >
        <source
          src="/Darenokoe/assets/video/Darenokoe_PV_web.mp4"
          type="video/mp4"
        />
        お使いのブラウザは動画の再生に対応していません。
      </video>
    </main>
  );
}