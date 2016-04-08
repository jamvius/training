require 'telegram/bot'

token = '186560845:AAFBDRJuLa8VuQRamBug8QzIZ1XnBIe5--0'
# https://api.telegram.org/bot186560845:AAFBDRJuLa8VuQRamBug8QzIZ1XnBIe5--0/getMe

Telegram::Bot::Client.run(token) do |bot|
  bot.listen do |message|
  	puts message.attributes
  	puts message.from.attributes
  	puts message.from.username
  	puts message.from.first_name
  	puts message.from.last_name
  	puts message.text

    case message.text
    when '/start'
      bot.api.send_message(chat_id: message.chat.id, text: "I am the Jamv bot, My commands are /jamvius /map")
    when '/jamvius'
      bot.api.send_message(chat_id: message.chat.id, text: "Welcome to http://jamvius.github.io")
    when '/map'
      bot.api.send_location(chat_id: message.chat.id, latitude: -37.807416, longitude: 144.985339)      
    when 'hola'
      bot.api.send_message(chat_id: message.chat.id, text: "hola #{message.from.first_name}")	
    end

  end
end

