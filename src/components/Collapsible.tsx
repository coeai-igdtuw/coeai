
import React, { useState } from "react";

interface IProps {
  open?: boolean;
  title: string;
  children: React.ReactNode;
}
const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="card">
        <div>
          <div className="p-3 border-bottom d-flex justify-content-between">
            <h6 className='expertTopic' style={{fontSize:'1vw', fontWeight:'bolder', paddingRight:'2vw'}}>{title}</h6>
            
            <button type="button" className="btn" onClick={handleFilterOpening}>
              {!isOpen ? (
                  '^'
) : (
                'v'
              )}
            </button>
          </div>
        </div>

        <div className="border-bottom">
          <div>{isOpen && <div className="p-3">{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;