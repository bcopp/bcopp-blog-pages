// Dummy class for now
export class MarkdownUtils {

  // Intersection types
  getSummary(markdown: string | number): string | number {
    if (markdown as string){
      return markdown + "Hello"
    }
    else{
      return markdown
    }
  }
}