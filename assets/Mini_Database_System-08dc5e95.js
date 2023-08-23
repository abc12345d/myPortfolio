const g="data:text/markdown;base64,IyBNaW5pIGRhdGFiYXNlIHN5c3RlbQoKQSBsaWdodHdlaWdodCByZWxhdGlvbmFsIGRhdGFiYXNlIHN5c3RlbSB0aGF0IGhhbmRsZXMgY29uanVuY3RpdmUgcXVlcnkgKHN1YnNldCBvZiBTUUwpLCBoYXMgcXVlcnkgb3B0aW1pc2F0aW9uIGFuZCBzdXBwb3J0cyBiYXNpYyBkYXRhIG9wZXJhdGlvbnMgc3VjaCBhcyBzY2FubmluZywgc2VsZWN0aW9uLCBwcm9qZWN0aW9uLCBqb2luIGFuZCBhZ2dyZWdhdGlvbi4gCgotLS0KClRoaXMgaXMgdGhlIGNvdXJzZXdvcmsgZm9yIEFkdmFuY2VkIERhdGFiYXNlIFN5c3RlbSAoSU5GUjExMTk5KS4gVGhlIHNrZWxldG9uIHByb2plY3QgY29tZXMgd2l0aCBhIHF1ZXJ5IHBhcnNlciBhbmQgbXkgam9iIGlzIGltcGxlbWVudGluZzoKCjEuIHRoZSBtaW5pbWl6YXRpb24gb2YgcXVlcnkgCjIuIHRoZSBpbnRlcnByZXRlciBvZiBxdWVyeQoKIyMgVGhlIG1pbmltaXphdGlvbiBvZiBxdWVyeSAKQnkgbWluaW1pc2luZyB0aGUgY29uanVuY3RpdmUgcXVlcnkgKENRLCBzZWUgZnVydGhlciBub3RlcyBmb3IgbW9yZSBkZXRhaWxzKSwgd2UgY2FuIG1pbmltaXNlIHRoZSBudW1iZXIgb2YgcmVsYXRpb25zIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBpbnRlcnByZXRlciBvZiBDUSwgcmVzdWx0aW5nIHRvIGEgc2lnbmlmaWNhbnQgcmVkdWN0aW9uIGluIHRpbWUgY29tcGxleGl0eS4gRm9yIGV4YW1wbGUgKDEpLAoKYGBgClEoeCkgOi0gVCh4LCB5LCB6KSwgVCh4LCB0LCAyKSwgVCh3LCB0LCB6KSwgVCh4LCB0LCB6KQoKY2FuIGJlIG1pbmltaXNlZCB0byAKClEoeCkgOi0gVCh4LCB5dCwgMikKCmBgYApUbyBtZSwgdGhlIGhhcmRlc3QgcGFydCBpbiBxdWVyeSBtaW5pbWl6YXRpb24gaXMgdHJhbnNmb3JtaW5nIHdvcmtpbmcgcHJvY2VzcyBvZiBDUSBtaW5pbWl6YXRpb24gaW50byBhY3R1YWwgYWxnb3JpdGhtLgoKVGhlIHdvcmtpbmcgcHJvY2VzcyBvZiBtaW5pbWl6YXRpb24gaXMKMS4geCBhcHBlYXJlZCBpbiBxdWVyeSBoZWFkIHNvIGl0IGlzIGEgbXVzdC12YXJpYWJsZSB0aGF0IGNhbm5ub3QgYmUgZGVsZXRlZCAKLSBjb25maXJtZWQgc2V0OiB7eCA9IHh9Ci0gc3RhZ2Ugc2V0OiB7fQoyLiBmaXJzdCByZWxhdGlvbiBhbmQgc2Vjb25kIHJlbGF0aW9uIGhhdmUgbWF0Y2hlZCBhdHRyaWJ1dGUgYHhgIGluIHNhbWUgcG9zaXRpb24gc28gYHkgPSB0YCBhbmQgYHogPSAyYC4gVGhlIGAyYCBpcyBhIGNvbnN0YW50IGhlbmNlIGB6ID0gMmAgaXMgYWxzbyBhZGRlZCB0byBjb25maXJtZWQgc2V0LgotIGNvbmZpcm1lZCBzZXQ6IHt4ID0geCwgeiA9IDJ9Ci0gc3RhZ2Ugc2V0OiB7eSA9IHR9CjMuIGZpcnN0IHJlbGF0aW9uIGFuZCB0aGlyZCByZWxhdGlvbiBoYXZlIG1hdGNoZWQgYXR0cmlidXRlIGB6YCBpbiBzYW1lIHBvc2l0aW9uIHNvIGB3ID0geGAgYW5kIGB0ID0geWAuIAotIGNvbmZpcm1lZCBwYWlyOiB7eCA9IHgsIHogPSAyfQotIHN0YWdlIHNldDoge3kgPSB0LCB3ID0geCwgdCA9IHl9CjQuIHJlc29sdmUgYHkgPSB0YCBhbmQgYHQgPSB5YCBhbmQgbW92ZSB0aGUgbmV3IHBhaXJpbmcgaW50byB0aGUgY29uZmlybWVkIHNldAotIGNvbmZpcm1lZCBzZXQ6IHt4ID0geCwgeiA9IDIsIHkgPSB5dCwgdCA9IHl0fQotIHN0YWdlIHNldDoge3cgPSB4fQo1LiBzZWNvbmQgcmVsYXRpb24gYW5kIGxhc3QgcmVsYXRpb24gaGF2ZSBtYXRjaGVkIGF0dHJpYnV0ZSBgeGAgYW5kIGB0YCBzbyBgeiA9IDJgCi0gY29uZmlybWVkIHNldDoge3ggPSB4LCB6ID0gMiwgeSA9IHl0LCB0ID0geXR9Ci0gc3RhZ2Ugc2V0OiB7dyA9IHh9CgpUaGUgcHNldWRvY29kZSBmb3IgcXVlcnkgbWluaW1pemF0aW9uIGlzOgoKYGBgCjEuIGZvcm0gY29uZmlybWVkX3NldAogICAtIG1hcCB2YXJpYWJsZXMgaW4gdGhlIHF1ZXJ5IGhlYWQgdG8gdGhlbXNlbHZlcwogICAtIG1hcCBjb25zdGFudHMgdG8gdGhlbXNlbHZlcyBhbmQgcHJlcHJvY2VzcyBib2R5IG9mIHF1ZXJ5IHRvIGRvIENRIG1pbmltaXNhdGlvbgozLiBzdG9yZSByZWxhdGlvbmFsIGF0b21zIHdpdGggc2FtZSBuYW1lIGludG8gYW4gYXJyYXlsaXN0LiAKICAgRS5nLiBSKGEsYixjKSBhbmQgUihjLGQsZSkgd2lsbCBiZSBzdG9yZWQgdG8gc2FtZSBhcnJheWxpc3QgYW5kIAogICAgICAgIFMoZixnKSBhbmQgUyhoLGkpIHdpbGwgYmUgc3RvcmVkIGluIGFub3RoZXIgYXJyYXlsaXN0CjUuIGZpbmQgYWxsIHRoZSBhdmFpbGFibGUgc3Vic3RpdHV0aW9uIGZvciBldmVyeSByZWxhdGlvbmFsIGF0b21zIGJ5IGZpbmRpbmcgcGFpcmluZyAoUl8xLCBSXzIpIHdoZXJlIAogICBFLmcuIFJfMShhLGMsYykgYW5kIFJfMih4LHkseikKICAgICAgICBhdmFpbGFibGUgc3Vic3RpdHV0aW9uIGlzIFt4ID0gYSwgeSA9IGMsIHogPSBjXSBmcm9tIFJfMiB0byBSXzEKNi4gdXNlIGJhY2t0cmFja2luZyBhbGdvcml0aG0gdG8gZmluZCB0aGUgY29ycmVjdCBzdWJzdGl0dXRpb24gZm9yIGVhY2ggcmVsYXRpb25hbCBhdG9tIHdoZXJlIGEgY29ycmVjdAogICBzdWJzdGl0dXRpb24gd2lsbCBub3QgY2xhc2ggd2l0aCB0aGUgY29uZmlybWVkX3NldApgYGAKCkJlbG93IGlzIHRoZSBiYWNrdHJhY2tpbmcgdHJlZSBmb3IgdGhlIGV4YW1wbGUgKDEpOgo8aW1nIHdpZHRoPSI4ODgiIGFsdD0iYmFja3RyYWNraW5nVHJlZSIgc3JjPSJodHRwczovL2dpdGh1Yi5jb20vYWJjMTIzNDVkL2FsZ29yaXRobV9wcmFjdGljZS9hc3NldHMvNDQ1MTI3MjIvMWE4M2U4MWQtM2Q3Yi00MTVmLWI4NTQtODljZTBlOThhYzYyIj4KCgojIEZ1cnRoZXIgbm90ZXMKCiMjIyBXaGF0IGlzIENRPwpBbnkgc2ltcGxlIFNFTEVDVC1GUk9NLVdIRVJFIFNRTCBxdWVyeSAob25seSBBTkQgYW5kIGVxdWFsaXR5IGluIHRoZSBXSEVSRSBjbGF1c2UpIGNhbiBiZSBleHByZXNzZWQgYXMgYSBjb25qdW5jdGl2ZSBxdWVyeSAoQ1EpLiBGb3IgZXhhbXBsZSwKCmBgYApRKHgsIFNVTSh0KSkgOi0gUih4LCB5LCB6KSwgUyh4LCB3LCB0KSwgeCA+PSA1CgppcyBlcXVpdmFsZW50IHRvCgpTRUxFQ1QgeCwgU1VNKHQpCkZST00gcgpJTk5FUiBKT0lOIFMgT04gUi54ID0gUy54CldIRVJFIHggPj0gNQpgYGA=";export{g as default};
