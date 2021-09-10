export default function Button({ children, onClick, disabled }) {
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
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            display: flex;

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

          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  );
}
