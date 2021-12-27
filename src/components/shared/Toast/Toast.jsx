import { Tag } from '@dexma/ui-components';
import './Toast.css';

export const Toast = ({ label }) => {
  return (
    <div className="toast">
      <Tag className="tag">{label}</Tag>
    </div>
  )
};