### 에디트플러스 

````java
public class ReadShowMain {

	public static void main(String[] fileName) {
		// TODO Auto-generated method stub
				// 1. 현재 위치
				System.out.println(fileName[0]);
				String curDir = System.getProperty("user.dir");
				int exPos = fileName[0].lastIndexOf(".");
				String fileNameOnly = fileName[0].substring(0, exPos);
				String ext = fileName[0].substring(exPos + 1);

				// 3. file
				File inFile = new File(curDir, fileName[0]);
				File outFile = new File(curDir, fileNameOnly+ "_out." + ext);

				// ==========================//
				// 텍스트 파일 쓰기
				// ==========================//
				BufferedWriter bw = null;
				BufferedReader br = null;
				try {
					bw = new BufferedWriter(new FileWriter(outFile));
					br = new BufferedReader(new FileReader(inFile));
					String line;
					bw.write("HI THIS IS TEST~~~~~~!");
					while ((line = br.readLine()) != null) {
						bw.write(line);
						bw.newLine();
						bw.flush();
					}
					System.out.println("완료");
				} catch (IOException e) {
					e.printStackTrace();
				} finally {
					if (bw != null)
						try {
							bw.close();
						} catch (IOException e) {
						}
				}
	}

}
````
