package org.example;

import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.ZooKeeper;

import java.io.IOException;

public class EleicaoDeLider {
    private static final String HOST = "localhost";
    private static final int PORT = 2181;
    private static final int TIMEOUT = 5000;
    private ZooKeeper zk;

    public static void main(String[] args) throws Exception {
        System.out.printf("Metodo main executando na threa: %s", Thread.currentThread().getName());
        var eleicaoDeLider = new EleicaoDeLider();
        eleicaoDeLider.conectar();
        eleicaoDeLider.executar();
    }

    public void conectar() throws IOException {
        zk = new ZooKeeper(
                String.format("%s:%s", HOST, PORT),
                TIMEOUT,
                (watchedEvent) -> {
                    System.out.printf("Evento aconteceu na thread: %s", Thread.currentThread().getName());
                    System.out.println(watchedEvent.getType().toString());
                    System.out.println(watchedEvent.getState().toString());
                }
        );
    }

    public void executar() throws KeeperException, InterruptedException, IOException {
        synchronized (zk){
            zk.wait();
        }
    }
}
