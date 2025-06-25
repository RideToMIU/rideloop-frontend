import { type ReactNode } from "react";

const Card = ({
  children,
  title,
  footer,
  customClass,
}: {
  children: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
  customClass?: string;
}) => {
  return (
    <div className={`card bg-base-100 shadow-sm ${customClass || ""}`}>
      {title ? <div className="card-title">{title}</div> : null}
      <div className="card-body">{children}</div>
      {footer ? <div className="card-actions">{footer}</div> : null}
    </div>
  );
};

export default Card;
