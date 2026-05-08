import {
  createTicketModalHandler,
  closeTicketModalHandler,
} from '../../handlers/ticketButtons.js';

export default [createTicketModalHandler, closeTicketModalHandler];
const {
    ContainerBuilder,
    TextDisplayBuilder,
    MediaGalleryBuilder,
    MediaGalleryItemBuilder,
    SeparatorBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require("discord.js");

const supportPanel = new ContainerBuilder()
    .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
            "# Precision Designs Assistance\n" +
            "Welcome to Assistance. This section is for members who need help, have questions, or require support within the server.\n\n" +
            "Our staff team is here to assist you with any concerns, whether it is general inquiries, server issues, or guidance.\n\n" +
            "**Please provide clear details when asking for help and avoid pinging staff.**"
        )
    )

    .addMediaGalleryComponents(
        new MediaGalleryBuilder().addItems(
            new MediaGalleryItemBuilder()
                .setURL("")
        )
    )

    .addSeparatorComponents(
        new SeparatorBuilder()
    )

    .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
            "### Terms of Service\n" +
            "By contacting support, you acknowledge and agree to abide by our Terms of Service.\n\n" +
            "- Open only one ticket per issue\n" +
            "- Be respectful to staff\n" +
            "- Provide complete information"
        )
    );

const buttons = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
        .setCustomId("support")
        .setLabel("Support")
        .setStyle(ButtonStyle.Secondary),

    new ButtonBuilder()
        .setCustomId("appeals")
        .setLabel("Appeals")
        .setStyle(ButtonStyle.Secondary)
);

channel.send({
    components: [supportPanel, buttons],
});
