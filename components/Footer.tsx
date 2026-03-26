export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <svg className="bow-icon" viewBox="0 0 24 24">
          <path d="M12 11C10.5 8.5 7.5 7.5 5.5 8.5C3.5 9.5 3 12.5 5 14L12 11Z" />
          <path d="M12 11C13.5 8.5 16.5 7.5 18.5 8.5C20.5 9.5 21 12.5 19 14L12 11Z" />
          <path d="M11.5 11.5L9 19" />
          <path d="M12.5 11.5L15 19" />
        </svg>
        Carolina Celedón
      </div>
      <div className="footer-right">
        Porto, {new Date().getFullYear()}
      </div>
    </footer>
  );
}
