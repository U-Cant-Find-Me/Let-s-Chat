import prisma from "@/app/libs/prismadb";

const getMessages = async (
    conversationId: string
) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                conversationId: conversationId
            },
            include:{
                sender: true,
                seen: true,
            },
            orderBy: {
                createdAt: 'asc'
                // new messages will apper at the bottom from this asc, if changed to dsc then they will appear at the top.
            }
        });

        return messages;
    } catch (error: any) {
        return [];
    }
}

export default getMessages;