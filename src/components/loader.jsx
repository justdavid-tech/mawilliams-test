export default function Loader({ size = 96, color = "#C9A84C", fullScreen = false }) {
  const squareSize = Math.round(size * 0.29);
  const gap = Math.round(size * 0.02);
  const step = squareSize + gap * 2;

  const delays = Array.from({ length: 7 }, (_, i) =>
    `${(-i * (10 / 7)).toFixed(10)}s`
  );

  const wrapStyle = fullScreen
    ? {
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(30,54,34,0.85)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
      }
    : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };

  return (
    <>
      <style>{`
        @keyframes maw-square-animation {
          0%     { left: 0;        top: 0; }
          10.5%  { left: 0;        top: 0; }
          12.5%  { left: ${step}px; top: 0; }
          23%    { left: ${step}px; top: 0; }
          25%    { left: ${step * 2}px; top: 0; }
          35.5%  { left: ${step * 2}px; top: 0; }
          37.5%  { left: ${step * 2}px; top: ${step}px; }
          48%    { left: ${step * 2}px; top: ${step}px; }
          50%    { left: ${step}px;     top: ${step}px; }
          60.5%  { left: ${step}px;     top: ${step}px; }
          62.5%  { left: ${step}px;     top: ${step * 2}px; }
          73%    { left: ${step}px;     top: ${step * 2}px; }
          75%    { left: 0;             top: ${step * 2}px; }
          85.5%  { left: 0;             top: ${step * 2}px; }
          87.5%  { left: 0;             top: ${step}px; }
          98%    { left: 0;             top: ${step}px; }
          100%   { left: 0;             top: 0; }
        }

        .maw-loader {
          position: relative;
          width: ${size}px;
          height: ${size}px;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .maw-loader-square {
          position: absolute;
          top: 0;
          left: 0;
          width: ${squareSize}px;
          height: ${squareSize}px;
          margin: ${gap}px;
          border-radius: 0;
          background: ${color};
          animation: maw-square-animation 10s ease-in-out infinite both;
        }
      `}</style>

      <div style={wrapStyle} role="status" aria-label="Loading">
        <div className="maw-loader">
          {delays.map((delay, i) => (
            <div
              key={i}
              className="maw-loader-square"
              style={{ animationDelay: delay }}
            />
          ))}
        </div>
      </div>
    </>
  );
}