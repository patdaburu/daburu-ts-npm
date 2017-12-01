export function echo(msg: string, loud: boolean = false): string {
    if (!msg) {
        return "";
    } else if (!loud) {
        return msg;
    } else {
        return msg.toUpperCase();
    }
}

