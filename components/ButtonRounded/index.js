export default function ButtonRounded({ children, onClick, disabled }) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            align-items: center;
            justify-content: center;
            margin-top: 13px;
            background: black;
            border: 0;
            border-radius: 50%;
            color: #fff;
            cursor: pointer;
            display: flex;
            height: 90px;
            width: 90px;

            font-weight: 500;
            font-size: 16px;
            padding: 8px 24px;
            transition: opacity 0.3s ease;
            user-select: none;
          }

          button[disabled] {
            pointer-events: none;
            opacity: 0.2;
          }

          button > :global(svg) {
            margin-right: 8px;
          }

          button:hover >:global(span){
            opacity: 1;
          }

          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  );
}
