import { PUBLIC_TG_KEY, PUBLIC_TG_CHAT } from '$env/static/public';

export const sendConfirmNotification = async ({
	name,
	alcohol = '-',
	alcoholList,
	food = '-',
	comment = '-'
}: {
	name: string;
	alcohol?: string;
	alcoholList: string[];
	food?: string;
	comment: string;
}) => {
	const message = `
		👋🏻%0A
		Гость(-и) ${name} подтвердил(-и) ✅ свое присутствие!%0A%0A

		Предпочтения по алкоголю 🍷: ${alcohol} ${alcoholList.join(' ')} %0A
		Предпочтения по еде 🥑: ${food}%0A%0A

		Комментарий 💬:%0A${comment}%0A%0A
	`;
	await sendNotification(message);
};

export const sendDeclineNotification = async ({
	name,
	comment
}: {
	name: string;
	comment: string;
}) => {
	const message = `
		👋🏻%0A
		К сожалению ${name} не сможет(-гут) присутствовать ❌%0A%0A

		Комментарий 💬:%0A ${comment}
	`;
	await sendNotification(message);
};

const sendNotification = async (message: string) => {
	const url = `https://api.telegram.org/bot${PUBLIC_TG_KEY}/sendMessage?chat_id=${PUBLIC_TG_CHAT}&text=${message}`;

	await fetch(url);
};
