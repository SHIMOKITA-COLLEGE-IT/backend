import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutCoCosInput } from './photo-create-without-co-cos.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutCoCosInput } from './photo-create-or-connect-without-co-cos.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@InputType()
export class PhotoCreateNestedManyWithoutCoCosInput {

    @Field(() => [PhotoCreateWithoutCoCosInput], {nullable:true})
    @Type(() => PhotoCreateWithoutCoCosInput)
    create?: Array<PhotoCreateWithoutCoCosInput>;

    @Field(() => [PhotoCreateOrConnectWithoutCoCosInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutCoCosInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutCoCosInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    connect?: Array<PhotoWhereUniqueInput>;
}
