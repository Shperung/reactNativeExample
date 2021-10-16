#import "NativeModuleEx.h"

@implementation NativeModuleEx

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(testModule:(NSString *)string )
{
  NSLog(@"The string '%@' comes from JavaScript! ", string);
}

RCT_EXPORT_METHOD( myCallback:(RCTResponseSenderBlock)callback)
{
 callback(@[@"callback text with naive IOS"]);
}

@end


