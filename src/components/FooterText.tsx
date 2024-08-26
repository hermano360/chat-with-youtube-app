interface FooterTextProps {
  stickyBottom?: boolean;
}

export const FooterText = ({ stickyBottom }: FooterTextProps) => {
  return (
    <div
      className={`text-sm text-gray-600 ${
        stickyBottom ? "sticky bottom-10" : ""
      } text-center bg-opacity-5 bg-gray-900`}
    >
      Feedback or suggestions? Reach out to{" "}
      <a href="mailto:hermano360@gmail.com" className="text-gray-400">
        hermano360@gmail.com
      </a>
    </div>
  );
};
