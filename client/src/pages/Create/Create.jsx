import "./Create.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Create = () => {
    const dispatch = useDispatch()
    const temperament = useSelector(state => state.temperaments)
};

export { Create };
