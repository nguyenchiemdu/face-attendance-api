import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class MyWebSocketGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  afterInit() {
    // Your initialization logic here
    console.log('WebSocket gateway initialized');
  }

  // Method to emit a value to the connected client
  emitValueToClient(value: any) {
    this.server.emit('attendance', value);
  }
}
