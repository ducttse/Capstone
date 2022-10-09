import moment from "moment";
import "moment/locale/vi";
export const vnMoment = (time) => {
	return moment(time).locale("vi");
};
