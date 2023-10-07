import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../../../Store/Slice/IsOpenSlice";
const useEventModal = () => {
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleOpen());
  };
  return { isOpen, toggle };
};

export default useEventModal;
