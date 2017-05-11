initSidebarItems({"constant":[["MODBUS_MAX_ADU_LENGTH",""],["MODBUS_TCP_DEFAULT_PORT",""]],"enum":[["request_to_send_mode",""],["serial_mode",""]],"mod":[["errors",""]],"struct":[["Modbus","Safe interface for libmodbus"]],"trait":[["ModbusClient","The Modbus protocol defines different data types and functions to read and write them from/to remote devices. The following functions are used by the clients to send Modbus requests:"],["ModbusRTU","The RTU backend (Remote Terminal Unit) is used in serial communication and makes use of a compact, binary representation of the data for protocol communication. The RTU format follows the commands/data with a cyclic redundancy check checksum as an error check mechanism to ensure the reliability of data. Modbus RTU is the most common implementation available for Modbus. A Modbus RTU message must be transmitted continuously without inter-character hesitations (extract from Wikipedia, Modbus, http://en.wikipedia.org/wiki/Modbus (as of Mar. 13, 2011, 20:51 GMT)."],["ModbusServer","The server is waiting for request from clients and must answer when it is concerned by the request. The libmodbus offers the following functions to handle requests:"],["ModbusTCP","The TCP backend implements a Modbus variant used for communications over TCP/IPv4 networks. It does not require a checksum calculation as lower layer takes care of the same."],["ModbusTCPPI","The TCP PI (Protocol Independent) backend implements a Modbus variant used for communications over TCP IPv4 and IPv6 networks. It does not require a checksum calculation as lower layer takes care of the same."]]});